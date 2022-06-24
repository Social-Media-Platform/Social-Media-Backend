const Users = require('../model/userModel');

async function fetchUsers(req,res){
    try{
        const data = await Users.findAllUsers()
        
        res.json({
            data
        })
    } catch(err){
        res.statusCode = 200;
        res.json({
            message:err.message
        })
    }
}

async function createUser(req,res){
    const userData ={
        username,
        password,
        email,
        zipcode,
        first_name,
        last_name,
        bio,
        display_name
    }

    if(!userData){
        return res.status(400).json({
            message : 'You have to enter text'
        })
    }
    try{
        const userInfo = await Users.createUser(userData)
        res.status(201).json({
            data : userInfo
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}

async function deleteUser(req,res){
    const user_id = req.params.id

    const data = await Users.getSpecificUser(user_id)

    if(!data){
        res.status(404).json({
          message : `Could not find todo with id ${user_i}`
        })
      }

      try{
          await Users.removed(user_id)
          return res.sendStatus(204)
      }catch(err){
          res.status(404).json({
              message:err.message
          })
      }
    }

    async function getUser(req,res){
        const username = req.params.id

        if(!username){
            res.status(400).json({
                message: "No user exits by that username"
              })
        }
        try{
            const data = await Users.getUserName(username)
            res.status(200).json({
                data
              })
            }catch (err){
              res.status(404).json({
                message : err.message
              })
            }
          }

          async function updateUserName(req,res){
              const username = req.params.id
              const {newUsername} = req.body

              if(!username){
                res.status(404).json({
                    message: `No user by this username : ${username}`
                  })
              }
            try{
              const data = await Users.updateUserName(username,newUsername)
              res.status(200).json({
                  data
              })
          }catch(err){
              res.status(404).json({
                  message : err.message
              })
          }
          }

          async function updateBio(req,res){
            const username = req.params.id
            const {bioData} = req.body

            if(!username){
              res.status(404).json({
                  message: `No user by this username : ${username}`
                })
            }
          try{
            const data = await Users.updateBio(username,bioData)
            res.status(200).json({
                data
            })
        }catch(err){
            res.status(404).json({
                message : err.message
            })
        }
        }

        async function updateFirstNameLastName(req,res){
            const username = req.params.id
            const updatedName = {first_name, last_name} = req.body

            if(!username){
              res.status(404).json({
                  message: `No user by this username : ${username}`
                })
            }
          try{
            const data = await Users.updateFirstNameLastName(username,updatedName)
            res.status(200).json({
                data
            })
        }catch(err){
            res.status(404).json({
                message : err.message
            })
        }
        }


        async function updateDisplayName(req,res){
            const username = req.params.id
            const {displayName} = req.body

            if(!username){
              res.status(404).json({
                  message: `No user by this username : ${username}`
                })
            }
          try{
            const data = await Users.updateDisplayName(username,displayName)
            res.status(200).json({
                data
            })
        }catch(err){
            res.status(404).json({
                message : err.message
            })
        }
        }
module.exports = {
    fetchUsers,
    createUser,
    deleteUser,
    updateUserName,
    getUser,
    updateBio,
    updateFirstNameLastName,
    updateDisplayName
};