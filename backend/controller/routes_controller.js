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



async function redirectToRealUrl(req,res){
    const id = req.params.id;

    if (!req.params.id)
      return res.status(404).json({ err: "no link provided" });

    try{
        const data= await model.findOneAndUpdate(
            {shortUrl:id},
            {$push: {
                viewed:Date.now()
            }}
        )

        if(!data)
            return res.status(404).json({err:"no such link found"})

        res.redirect(data.url);

        return res.status(200).json(data)
    
    }
    catch(err){
        return res.status(400).json({error:"Something went wrong while finding ==> ",err})
    }

}






module.exports = {
  shortenTheUrl,
  redirectToRealUrl,
};