import{db} from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getPosts=(req,res)=>{

    const userId = req.query.userId
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, "secretkey", (err,userInfo)=>{
        if(err) return res.status(402).json("Token is not valid!");

        const q = userId !=="undefined" ? `select p.*,u.id as userId, name, profilePic from posts as p join users as u on (u.id=p.userId) where p.userId = ? order by p.createdAt desc`:`select p.*,u.id as userId, name, profilePic from posts as p join users as u on (u.id=p.userId)
        left join relationships as r on (p.userId=r.followedUserId) where r.followerUserId=? or p.userId =?
        order by p.createdAt desc`;

        const values = userId !=="undefined" ? [userId] : [userInfo.id, userInfo.id]
    
        db.query(q,values,(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    });
};

export const addPost=(req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, "secretkey", (err,userInfo)=>{
        if(err) return res.status(402).json("Token is not valid!");

        const q="insert into posts (`desc`,`img`,`createdAt`,`userId`) values (?) ";

        const values = [
            req.body.desc,
            req.body.img,
            moment(Date.now()).format("YYYY_MM_DD HH:mm:ss"),
            userInfo.id
        ]
    
        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("Post has been created");
        });
    });
};

export const deletePost=(req,res)=>{
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not logged in")

    jwt.verify(token, "secretkey", (err,userInfo)=>{
        if(err) return res.status(402).json("Token is not valid!");

        const q="delete from posts where `id`=? and `userId`=?";
    
        db.query(q,[req.params.id,userInfo.id],(err,data)=>{
            if(err) return res.status(500).json(err);
            if(data.affectedRows>0) return res.status(200).json("Post has been deleted");
            return res.status(403).json("You can delete only your post");
        });
    });
};