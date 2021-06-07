const expect=require('chai').expect;
const request=require('supertest');

const app=require('../../../backend/admin/app');
const conn=require('../DBconnect');

let token="";

describe("POST/admin/login",()=>{

   
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

describe("given admin name which does not exist ",()=>{
    it('should give 401 status code',(done)=>{
        request(app)
        .post("/admin/auth/login")
        .send(
            {
            name:"saroja",
            email:"saroja@test.com",
            password:"qwerty170",
            mobile:"8970013345",
            role:"ADMIN",
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

describe("when the name or password mismatches",()=>{
    it("password mismatch should give 401 status code",(done)=>{
            const response =request(app).post("/admin/auth/login")
            .send({
                name:"varshini",
                email:"psvarshini34@gmail.com",
                password:"huuu"
            }).then(response=>{
                expect(response.statusCode).to.be.equal(401);                
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     })


})

describe("when email mismatches",()=>{
    it("password mismatch should give 401 status code",(done)=>{
            const response =request(app).post("/admin/auth/login")
            .send({
                name:"varshini",
                email:"psvarshini3@gmail.com",
                password:"qwerty170"
            }).then(response=>{
                expect(response.statusCode).to.be.equal(401);                
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     })


})

describe("when email and password is given correctly",()=>{
    it("gives token with auth successful message and status code set to 200",(done)=>{
            const response =request(app).post("/admin/auth/login")
            .send({
                email:"psvarshini34@gmail.com",
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
    it("name,email and password fiels are mandatory, gives a status code set to 400",(done)=>{
            const response =request(app).post("/admin/auth/signup")
            .send({
                name:"random",
                password:"name",
            }).then(response=>{
                expect(response.statusCode).to.be.equal(400); 
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     });
})

describe("signup details when the account already exits",()=>{
    it("member already exists, gives a status code set to 400",(done)=>{
            const response =request(app).post("/admin/auth/signup")
            .send({
                name:"random",
                password:"name",
            }).then(response=>{
                expect(response.statusCode).to.be.equal(400);               
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     });
})
describe("signup process ",()=>{
    it("returns message with auth successfull, gives a status code set to 201",(done)=>{
            const response =request(app).post("/admin/auth/signup")
            .send({
                name:"siri",
                email:"sirijanu@test.com",
                password:"yuyua",
                mobile:1234567890,
                role:"ADMIN",
                status:"AVAILABLE"
            }).then(response=>{
                expect(response.statusCode).to.be.equal(201);               
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     });
})



})
