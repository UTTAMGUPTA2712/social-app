import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    imageURL: String,
  },
  {
    timestamps: true,
  }
);

let UserModel;

if (mongoose.models.users) {
  UserModel = mongoose.model('users');
} else {
  UserModel = mongoose.model('users', UserSchema);
}

export default UserModel;