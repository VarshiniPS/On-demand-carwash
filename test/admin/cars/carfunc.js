const expect=require('chai').expect;
const request=require('supertest');

const app=require('../../../backend/admin/app');
const conn=require('../DBconnect');

describe("POST/admin/car-func/addCar",()=>{

    before((done)=>{
        conn.connect()
        .then(()=>done())
        .catch((err)=>done(err));
    })

    after((done)=>{
        conn.close()
        .then(()=>done())
        .catch((err)=>done(err));
    })

    describe("given car name exists ",()=>{
        it('car name already exits and status code 403',(done)=>{
            request(app)
            .post("/admin/car-func/addCar")
            .send(
                {
                name:"SUV"
                }
            )
            .then(response=>{
                expect(response.statusCode).to.be.equal(403);               
                done()
            })
           .catch((err)=>{
                console.log(err);
                throw(err);
            })  
        });
    })
    describe("adding car without token ",()=>{
        it('no token provided and status code 500',(done)=>{
            request(app)
            .post("/admin/car-func/addCar")
            .send(
                {
                name:"MUV"
                }
            )
            .then(response=>{
                expect(response.statusCode).to.be.equal(500);               
                done()
            })
           .catch((err)=>{
                console.log(err);
                throw(err);
            })  
        });
    })
    
})