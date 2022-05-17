const {request, response } = require('express');
const pool = require('../libs/postgres')

pool.on('error', (err) => {console.log(err);})  
//para que el editor reconozca el tipo de dato se redunda en req y res
const getUsers = async (req =request, res=response)=>{
  try {
    //const client = await pool.connect();
    const query = "SELECT * FROM users"
    //await pool.connect();
    //const users = await client.query(query);
    //client.release();
    const users = await pool.query(query)
    res.json(
      users.rows
    );
    
  } catch (error) {
    res.status(500).json({message: error.message, error});
  }
}

     

const postUsers = (req =request, res=response)=>{
  res.json({
    message: 'PostUsers - Controller'
  })
}
const putUsers = (req = request, res = response)=>{
  res.json({
    message: 'putUsers - Controller'
  })
}
const patchUsers = (req =request, res=response)=>{
  res.json({
    message: 'PatchUsers - Controller'
  })
}
const deleteUsers = (req =request, res=response)=>{
  res.json({
    message: 'DeleteUsers - Controller'
  })
}

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  patchUsers,
  deleteUsers,
}