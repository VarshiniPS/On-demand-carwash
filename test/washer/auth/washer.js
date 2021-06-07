const expect=require('chai').expect;
const request=require('supertest');

const app=require('../../../backend/washer/app.js');
const conn=require('../DBconnect.js');

describe("POST/washer/login",()=>{

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
    describe("given washer details which does not exist ",()=>{
        it('should give a message of authetication failed with 401 status code',(done)=>{
            request(app)
            .post("/washer/auth/login")
            .send(
                {
                email:"dfg@gmail.com",
                password:"dfg"
                }
            )
            .then(response=>{
                expect(response.statusCode).to.be.equal(401);               
                done()
            })
           .catch((err)=>{
                console.log(err);
                throw(err);
            })  
        });
    })
    describe("when the email or password mismatches",()=>{
        it("password mismatch should give 401 status code",(done)=>{
                request(app)
                .post("/washer/auth/login")
                .send({
                    email:"washer2@test.com",
                    password:"hiii"
                }).then(response=>{
                    expect(response.statusCode).to.be.equal(401);                
                    done()
                })
                .catch((err)=>{
                    console.log(err);
                    throw(err);
                }) 
         });
    })
    describe("when email and password is given correctly",()=>{
        it("gives token with auth successful message and status code set to 200",(done)=>{
                const response =request(app).post("/washer/auth/login")
                .send({
                    email:"washer2@test.com",
                    password:"qwerty170",
                }).then(response=>{
                    expect(response.statusCode).to.be.equal(200); 
                    this.token=response.body.token                
                    done()
                })
                .catch((err)=>{
                    console.log(err);
                    throw(err);
                }) 
         });
    
})
    describe("signup details doesnot match the schema",()=>{
        it("model schema doesnot match and gives a status code set to 400",(done)=>{
                const response =request(app).post("/washer/auth/signup")
                .send({
                    name:"washer",
                    email:"wash",
                }).then(response=>{
                    expect(response.statusCode).to.be.equal(400); 
                    this.token=response.body.token                
                    done()
                })
                .catch((err)=>{
                    console.log(err);
                    throw(err);
                }) 
         });
    })
})