import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import {withRouter} from '../withRouter';

class ListEmployeeCompontent extends Component {
    
    constructor(props){
        super(props)

        this.state ={
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount(){

        EmployeeService.getEmployees().then((res)=>{

            this.setState({employees:res.data});

        });
    }

    viewEmployee(id){
        this.props.navigate(`/view-employee/${id}`);
    }

    addEmployee(){
        this.props.navigate('/add-employee');
    }

    editEmployee(id){
        this.props.navigate(`/update-employee/${id}`);
    }

    deleteEmployee(id){
         EmployeeService.deleteEmployee(id).then(res =>{
            this.setState({employees:this.state.employees.filter(employee => employee.id !==id)});
         });
    }
      
    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                </div><br/>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                          {
                              this.state.employees.map(
                                  employee =>
                                  <tr key = {employee.id}>
                                      <td>{employee.firstName}</td>
                                      <td>{employee.lastName}</td>
                                      <td>{employee.emailId}</td>
                                      <td><button onClick={()=> this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                      <button onClick={()=> this.deleteEmployee(employee.id)} className="btn btn-danger" style={{marginLeft:"10px"}}>Delete</button>
                                      <button onClick={()=> this.viewEmployee(employee.id)} className="btn btn-info" style={{marginLeft:"10px"}}>View</button>
                                      </td>
                                  </tr>
                              )
                          }
                        </tbody>
                    </table>

                </div>
                
            </div>
        );
    }
}

export default withRouter(ListEmployeeCompontent);