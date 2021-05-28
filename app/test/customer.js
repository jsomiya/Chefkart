const chai = require('chai');
const chaiHttp = require('chai-http');
const Customer = require('../models/customer.model');
const should = chai.should();
const app = express();

chai.use(chaiHttp);
describe('Customers',()=>{
    beforeEach((done) => {
        Customer.remove({},(err) => {
            done();
        });
    });
});

describe('/POST customer',()=>{
    it('it should not create a customer without name',(done)=>{
        let customer = {
            age:34,
            gender:"M",
            email:"s@j.com",
            password:"123"
        }

        chai.request(app)
        .post('/customers/register')
        .send(customer)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.errors.should.have.property('name');
            done();
        });
    });
});

