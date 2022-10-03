package com.example.kotlinmysqldemo.Learnings

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.query.Param

interface LearningsRepository:CrudRepository<Learning,Long >{
    @Query("SELECT s FROM Learning s JOIN s.tags t WHERE t = LOWER(:tag)")
    fun retrieveByTag(@Param("tag") tag: String?): List<Learning?>?
}