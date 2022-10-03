package com.example.kotlinmysqldemo.Accounts

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity // maps classname to table name Account -> account
// achieve different table name @Table(name="mytable")
data class Account(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id:Long = 0,
    val name:String
)
