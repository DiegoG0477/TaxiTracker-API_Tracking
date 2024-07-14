export class AuthService {
    async generateToken(secretKey: string): Promise<string> {
        // Generate a token using the secret key
        // 
        // const token = https://aws.lambda/secret-key-generator-service
        return secretKey;
    }
}