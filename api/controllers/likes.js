import {db} from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req,res) =>{
    
    const q="select userId from likes where postId = ?";
     
    db.query(q,[req.query.postId],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data.map(like=>like.userId));
    });
};


export const addLike=(req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, "secretkey", (err,userInfo)=>{
        if(err) return res.status(402).json("Token is not valid!");

        const q="insert into likes (`userId`,`postId`) values (?) ";

        const values = [
            userInfo.id,
            req.body.postId
        ];
    
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("Post has been liked.");
        });
    });
};

export const deleteLike=(req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, "secretkey", (err,userInfo)=>{
        if(err) return res.status(402).json("Token is not valid!");

        const q="delete from likes where `userId`= ? and `postId`=?";
    
        db.query(q,[userInfo.id,req.query.postId],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("Post has been disliked.");
        });
    });
};

