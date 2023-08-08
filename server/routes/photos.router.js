const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');

const s3Client = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

//!POST 
router.post('/', async (req, res) => {
    try {
        const imageProps = req.query;
        const imageData = req.files.image.data;

        const s3Res = await s3Client.upload({
            Bucket: 'blackheartcustoms',
            Key: imageProps.name,
            Body: imageData,
            // ACL: 'public-read',
        }).promise()
        console.log(s3Res.Location);
        const queryText = `INSERT INTO "photos" ("url", "kit_id")
        VALUES ($1, $2)`;
        await pool.query(queryText, [s3Res.Location, imageProps.kitId])
        res.sendStatus(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});

module.exports = router;
