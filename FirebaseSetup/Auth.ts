import auth from '@react-native-firebase/auth';

const signinUser =  async (email,password)=>{
    try {
      await auth().createUserWithEmailAndPassword(email,password);
      return {status:200,message:'Success'};
    } catch (error) {
      return {status:500,messsage:error};
    }
};

const loginUser =  async (email,password)=>{
  try {
    await auth().signInWithEmailAndPassword(email,password);
    return {status:200,message:'Success'};
  } catch (error) {
    return {status:500,messsage:error};
  }
};

const signOutUser = async () => {
  try {
    await auth().signOut();
    return { status: 200, message: "Success" };
  } catch (error) {
    return { status: 500, message: error };
  }
};

const checkUserLogin = async () => {
  try {
    if(auth().currentUser){
      return { status: 200, message: "login" };
    } else{
      return { status: 300, message: "Not login" };
    }
  } catch (error) {
    return { status: 500, message: error };
  }
};


export {signinUser,loginUser,signOutUser,checkUserLogin};