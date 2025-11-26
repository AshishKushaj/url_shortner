const nanoid = require("nanoid").nanoid
const {model} = require('../model/models')

async function shortenTheUrl(req,res){
    const body=req.body;
    if(!body.url)
        return res.status(400).json({err:"no url sent in body"})    

    const id=nanoid(8);

    const entry = new model({
        url:body.url,
        shortUrl:id
    });

    try{
        await entry.save()
        console.log("saved entry")
    }
    catch(err){
        console.log("err at saving entry in db  ==> ",err)
        return res.status(400).json({ err: "err at saving entry in db" });
    }

    return res.status(200).json({shortUrl:id})
}


module.exports={
    shortenTheUrl,
}