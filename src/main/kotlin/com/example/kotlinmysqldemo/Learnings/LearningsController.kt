package com.example.kotlinmysqldemo.Learnings

import org.springframework.web.bind.annotation.*
import java.util.*

@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
@RequestMapping("/learnings")
class LearningsController(val learningsRepository: LearningsRepository) {

    @GetMapping()
    fun getAllLearnings(): MutableIterable<Learning> {
        return learningsRepository.findAll()
    }

    @GetMapping("/{id}")
    fun getLearningById(@PathVariable id: Long): Optional<Learning> {
        return learningsRepository.findById(id)
    }

    @GetMapping("tag/{tag}")
    fun getLearningById(@PathVariable tag: String): List<Learning?>? {
        return learningsRepository.retrieveByTag(tag)
    }

    @PostMapping
    fun createLearning(
        @RequestParam title: String,
        @RequestParam body: String,
        @RequestParam tags: List<String>
    ): Learning {
        return learningsRepository.save(Learning(title = title, body = body, tags = tags))
    }
}