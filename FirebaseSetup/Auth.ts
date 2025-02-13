import auth from '@react-native-firebase/auth';

const signinUser =  async (email,password)=>{
    try {
      await auth().createUserWithEmailAndPassword(email,password);
      return {status:200,message:'Success'};
    } catch (error) {
      return {status:500,messsage:error};
    }
}

const loginUser =  async (email,password)=>{
  try {
    await auth().signInWithEmailAndPassword(email,password);
    return {status:200,message:'Success'};
  } catch (error) {
    return {status:500,messsage:error};
  }
}

export {signinUser,loginUser};