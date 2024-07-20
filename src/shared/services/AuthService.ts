import dotenv from "dotenv";
dotenv.config();

export class AuthService {
    async generateToken(secretKey: string): Promise<string> {
        const awsLambdaUrl = process.env.AWS_LAMBDA_JWT_URL ?? "";
        const response = await fetch(awsLambdaUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                "secret_key": secretKey 
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error status handling jwt sign: ${response.status}`);
        }

        const data = await response.json();

        return data.token;
    }
}