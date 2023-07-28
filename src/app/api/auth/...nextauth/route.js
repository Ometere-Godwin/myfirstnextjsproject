import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/CredentialsProvider/"
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),

    //A user may prefer to login with email.
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {

        await connect();

        try{
          const user = await User.findOne({email: credentials.email});
          //comparing user in the database
          if (user) {
            //check for password
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

            if (isPasswordCorrect){
              return user;
            }else{
              throw new Error("Wrong credentials")
            }
          }else{
            throw new Error ("User not found");
          }
        }catch(err){
          throw new Error(err);
        }
      }
    })
  ],
  pages: {
    error:"/dashboard/login"
  }
});

export {handler as GET, handler as POST}