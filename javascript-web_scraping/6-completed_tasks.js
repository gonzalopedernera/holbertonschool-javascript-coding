#!/usr/bin/node
// Computes the number of tasks completed by user id
const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
    if (err) {
        console.log(err);
    } else {
        const tasks = JSON.parse(body);
        const completed = {};
        for (const task of tasks) {
        if (task.completed === true) {
            if (completed[task.userId] === undefined) {
            completed[task.userId] = 1;
            } else {
            completed[task.userId]++;
            }
        }
        }
        console.log(completed);
    }
    });