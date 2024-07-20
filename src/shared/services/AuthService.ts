import dotenv from "dotenv";
dotenv.config();

export class AuthService {
    async generateToken(secretKey: string): Promise<string> {
        const awsLambdaUrl = process.env.AWS_LAMBDA_JWT_URL;

        if (!awsLambdaUrl) {
            throw new Error(
                "AWS_LAMBDA_JWT_URL is not defined in the environment variables"
            );
        }

        try {
            const response = await fetch(awsLambdaUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    secret_key: secretKey,
                }),
            });

            if (!response.ok) {
                const errorBody = await response.text();
                console.error(`Response status: ${response.status}`);
                console.error(`Response body: ${errorBody}`);
                throw new Error(
                    `HTTP error status handling jwt sign: ${response.status}. Body: ${errorBody}`
                );
            }

            const data = await response.json();
            return data.token;
        } catch (error) {
            console.error("Error in generateToken:", error);
            throw error;
        }
    }
}