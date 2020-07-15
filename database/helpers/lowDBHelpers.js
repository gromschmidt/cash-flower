const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database/files/db.json')
const db = low(adapter)

db.defaults({ users: [], invoices: [], customers: [] }).write()

// Users

/**
 * Create a new User
 * @param {Object} data User Object
 */
exports.createUser = (data) => db.get('users').push(data).write()

/**
 * Get all Users
 */
exports.getUsers = () => db.get('users').value()

/**
 * Get one User by ID
 * @param {string} id UserID
 */
exports.getUserById =  (id) => db.get('users').find({id}).value()

/**
 * Update User by ID
 * @param {string} id UserID
 * @param {Object} data User Object
 */
exports.updateUserById = (id, data) => db.get('users').find({id}).assign(data).write()

// Invoices

/**
 * Create a new Invoice
 * @param {Object} data Invoice Object
 */
exports.createInvoice = (data) => db.get('invoices').push(data).write()

/**
 * Get all Invoices
 */
exports.getInvoices = () => db.get('invoices').value()

/**
 * Get one Invoice by InvoiceID
 * @param {string} id InvoiceID
 */
exports.getInvoiceById = (id) => db.get('invoices').find({id}).value()

/**
 * Get one Invoice by related Customer ID
 * @param {string} id related Customer ID
 */
exports.getInvoicesByCustomerId = (customerId) => db.get('invoices').filter({customerId}).value()

/**
 * Update Invoice by ID
 * @param {string} id InvoiceID
 * @param {Object} data User Object
 */
exports.updateInvoiceById = (id, data) => db.get('invoices').find({id}).assign(data).write()

// Customers

/**
 * Create a new Customer
 * @param {Object} data User Object
 */
exports.createCustomer = (data) => db.get('customers').push(data).write()

/**
 * Get all Customers
 */
exports.getCustomers = () => db.get('customers').value()

/**
 * Get one Customer by CustomerID
 * @param {string} id CustomerID
 */
exports.getCustomerById = (id) => db.get('customers').find({id}).value()

/**
 * Get one Customer by CustomerSlug
 * @param {string} id CustomerSlug
 */
exports.getCustomerBySlug = (slug) => db.get('customers').find({slug}).value()

/**
 * Update Customer by ID
 * @param {string} id CustomerID
 * @param {Object} data Customer Object
 */
exports.updateCustomerById = (id, data) => db.get('customers').find({id}).assign(data).write()









