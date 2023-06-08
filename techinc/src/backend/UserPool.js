import { CognitoUserPool } from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: "us-east-1_U18XdaPCs",
    ClientId: "5clf3tia8o3cr5uml6438bb1hf"
}

export default new CognitoUserPool(poolData);