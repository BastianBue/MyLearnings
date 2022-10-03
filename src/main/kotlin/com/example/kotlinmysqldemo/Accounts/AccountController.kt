package com.example.kotlinmysqldemo.Accounts

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/accounts")
class AccountController(
    val accountRepository: AccountRepository
) {
    @GetMapping
    fun findAll(): Iterable<Account> =
        accountRepository.findAll()

    @PostMapping("/create")
    fun createAccount(@RequestParam name: String): Account {
        return accountRepository.save(Account(name = name))
    }

    @GetMapping("/by-name")
    fun getByName(@RequestParam name: String): Iterable<Account> {
          return accountRepository.findByNameStartingWith(name)
    }
}