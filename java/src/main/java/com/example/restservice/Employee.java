package com.example.restservice;

class Employee {

	public String name;
  public String phone;
  public String email;
  public String role;
  public Long office;
  public Double salary;
  public Boolean vacation;

  Employee() {}

  Employee( String name, String phone, String email,  
            String role, Long office, Double salary, 
            Boolean vacation ) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.role = role;
    this.office = office;
    this.salary = salary;
    this.vacation = vacation;
  }

}