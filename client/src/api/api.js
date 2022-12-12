import axios from 'axios'


export const signup=(authdata)=> axios.post('/user/signup',authdata);
export const login=(authdata)=> axios.post('/user/login',authdata);
export const askQuestions=(data)=> axios.post('/Questions/Askquestion',data);
export const getQuestions=()=> axios.get('/Questions/Get');
export const postAnswer=(id,userId,noOfAnswers , answerBody , userAnswered)=> axios.patch(`answer/post/${id}`,{userId,noOfAnswers , answerBody , userAnswered}) 
export const delAnswer=(id)=>axios.delete(`Questions/Delete/${id}`);
export const deleteAnswer=(id,answerId,noOfAnswers)=> axios.patch(`answer/Delete/${id}`,{answerId,noOfAnswers})
export const votes=(id,value,userId)=> axios.patch(`/Questions/Votes/${id}`,{ value,userId })
export const users=()=> axios.get('/users/');
export const userUpdates=(id,name,about,tags)=> axios.patch(`users/Update/${id}`,{name,about,tags})