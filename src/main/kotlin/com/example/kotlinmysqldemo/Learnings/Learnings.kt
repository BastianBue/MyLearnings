package com.example.kotlinmysqldemo.Learnings

import javax.persistence.*


@Entity
data class Learning(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val title: String,
    val body: String,
    @ElementCollection
    val tags: List<String> = listOf()
)

//@Embeddable
//data class AdvancedTag(
//    val name:String,
//    val description:String,
//)