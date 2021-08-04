var express = require("express");
var router = express.Router();

/* router */
// book
var controller = require('../controllers/bookController');
router.get('/', controller.index);

var subset = "book";
router.get('/' + subset + '/create', controller.book_create_get);
router.post('/' + subset + '/create', controller.book_create_post);
router.get('/' + subset + '/:id/update', controller.book_update_get);
router.post('/' + subset + '/:id/update', controller.book_update_post);
router.get('/' + subset + '/:id/delete', controller.book_delete_get);
router.post('/' + subset + '/:id/delete', controller.book_delete_post);
router.get('/' + subset + '/:id', controller.book_detail);
router.get('/' + subset + 's', controller.book_list);

// author
var controller = require("../controllers/authorController");
var subset = "author";
router.get('/' + subset + '/create', controller.author_create_get);
router.post('/' + subset + '/create', controller.author_create_post);
router.get('/' + subset + '/:id/update', controller.author_update_get);
router.post('/' + subset + '/:id/update', controller.author_update_post);
router.get('/' + subset + '/:id/delete', controller.author_delete_get);
router.post('/' + subset + '/:id/delete', controller.author_delete_post);
router.get('/' + subset + '/:id', controller.author_detail);
router.get('/' + subset + 's', controller.author_list);

// book-instance
var controller = require('../controllers/bookinstanceController');
var subset = "bookinstance";
router.get('/' + subset + '/create', controller.bookinstance_create_get);
router.post('/' + subset + '/create', controller.bookinstance_create_post);
router.get('/' + subset + '/:id/update', controller.bookinstance_update_get);
router.post('/' + subset + '/:id/update', controller.bookinstance_update_post);
router.get('/' + subset + '/:id/delete', controller.bookinstance_delete_get);
router.post('/' + subset + '/:id/delete', controller.bookinstance_delete_post);
router.get('/' + subset + '/:id', controller.bookinstance_detail);
router.get('/' + subset + 's', controller.bookinstance_list);

// genre
var controller = require("../controllers/genreController");
var subset = "genre";
router.get('/' + subset + '/create', controller.genre_create_get);
router.post('/' + subset + '/create', controller.genre_create_post);
router.get('/' + subset + '/:id/update', controller.genre_update_get);
router.post('/' + subset + '/:id/update', controller.genre_update_post);
router.get('/' + subset + '/:id/delete', controller.genre_delete_get);
router.post('/' + subset + '/:id/delete', controller.genre_delete_post);
router.get('/' + subset + '/:id', controller.genre_detail);
router.get('/' + subset + 's', controller.genre_list);

module.exports = router;