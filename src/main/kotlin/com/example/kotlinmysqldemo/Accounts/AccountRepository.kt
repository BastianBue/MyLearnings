package com.example.kotlinmysqldemo.Accounts

import org.springframework.data.repository.CrudRepository

interface AccountRepository : CrudRepository<Account, Long>{
    //the query is inferred by the function name as long as the format is correct
    fun findByNameStartingWith(prefix:String):Iterable<Account>
}
