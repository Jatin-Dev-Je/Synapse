import CryptoUtils from '../utils/cryptoUtils';
import JwtUtils from '../utils/jwtUtils';
import Logger from '../utils/logger';
import User from '../models/User';

class AuthService {
  public async register(email: string, password: string, name: string): Promise<any> {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = await CryptoUtils.hashPassword(password);
      const user = new User({
        email,
        password: hashedPassword,
        name,
      });

      const savedUser = await user.save();
      Logger.info(`User registered: ${email}`);

      const token = JwtUtils.generateToken({ id: savedUser._id, email });
      return { user: savedUser, token };
    } catch (error) {
      Logger.error(`Registration error: ${error}`);
      throw error;
    }
  }

  public async login(email: string, password: string): Promise<any> {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }

      const isPasswordValid = await CryptoUtils.comparePassword(password, user.password);
      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }

      Logger.info(`User logged in: ${email}`);
      const token = JwtUtils.generateToken({ id: user._id, email });
      const refreshToken = JwtUtils.generateRefreshToken({ id: user._id, email });

      return { user, token, refreshToken };
    } catch (error) {
      Logger.error(`Login error: ${error}`);
      throw error;
    }
  }

  public async logout(userId: string): Promise<void> {
    try {
      Logger.info(`User logged out: ${userId}`);
    } catch (error) {
      Logger.error(`Logout error: ${error}`);
      throw error;
    }
  }

  public async refreshToken(refreshToken: string): Promise<any> {
    try {
      const decoded = JwtUtils.verifyRefreshToken(refreshToken);
      const user = await User.findById(decoded.id);

      if (!user) {
        throw new Error('User not found');
      }

      const token = JwtUtils.generateToken({ id: user._id, email: user.email });
      return { token };
    } catch (error) {
      Logger.error(`Token refresh error: ${error}`);
      throw error;
    }
  }
}

export default AuthService;
