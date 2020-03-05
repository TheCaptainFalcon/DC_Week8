const db = require('./conn');

class AlbumModel {
    constructor (id, name, genre, artist) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.artist = artist;
    }
    static async getAllAlbums() {
        try {
            const response = await db.any(`SELECT * FROM album;`);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
    static async getAlbumById(id) {
        try {
            const response = await db.any(`SELECT * FROM album WHERE id = ${id};`);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
    static async getReviewsByAlbumId(id) {
        try {
            const response = await db.any(`SELECT * FROM review WHERE id = ${id};`);
            return response;
        } catch(error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
    static async addReview(id, review_title, review_text) {
        try {
            const response = await db.one(`INSERT INTO review(reviewer_id, album_id, title, review) 
            VALUES($1, $2, $3, $4) RETURNING id`, [1, id, review_title, review_text]);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    
    }
    static async getSignUp(id) {
        try {
            const response = await db.any(`SELECT * FROM review WHERE id = ${id};`);
            return response;
        } catch(error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
    static async getLogin(id) {
        try {
            const response = await db.any(`SELECT * FROM review WHERE id = ${id};`);
            return response;
        } catch(error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = AlbumModel;
