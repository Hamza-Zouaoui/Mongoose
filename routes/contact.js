const express = require("express");

const ContactRoutes = express.Router();

const { AddContact, GetContacts, DeleteContact, UpdateContact, GetOneContact } = require("../controllers/contact");

ContactRoutes.post("/", AddContact);

ContactRoutes.get("/", GetContacts);

ContactRoutes.delete("/:id", DeleteContact);

ContactRoutes.put("/:id", UpdateContact);

ContactRoutes.get("/:id", GetOneContact);

module.exports = ContactRoutes;