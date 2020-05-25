# node-vs-java-rest-api-performance
ReST API Performance Test: Java vs Node.js

Rumors are: Node.js is slow, because programming model is single thread, blabla

I tested the two!

My minimalistic (don't call it "micro") ReST Serice:
* HelloWorld GET service with one URL query-parameter
* similar simple POST API service with some not-too-complex marshaling involved

Tried to make the code as comparable as I can get:
* Java uses newest version of SpringBoot
* Node.js uses Express.js

...both on Alpine Docker, both w/o any hacks to make it faster

# My Results ... you should proof by yourself

Also some kind of surprise for me!

## Complexity
* Java has more files, more folders, more descriptors, hundreds LoC (= complexity) 
* Node.js requires  [ONE file with 24 lines of code](nodejs/index.js)  to do the same + package.json (14 lines)
* Java has slower round tips (code/compile/restart)
* Both run smoothly on Docker

## Footprint
* Java + Springboot + Gradle is hungry: **900 MB RAM** *(for this tiny service!!)* - 
  I can reduce it to 400 MB w/o Gradle, buut ...
* Node.js is tiny: 6 MB at startup, **30 MB** during load test

If you have lot micro-services on Kubernetes, this will cost you 30x more RAM! 
In my AKS clusters the scale is because of RAM (CPU is more than enough): 
So if you plan a HelloWorld cloud farm, Kubernetes cloud costs are x30 with Java!

## Performance

Total (Avg):
* Node.js was able to process **2x more request per sec**, than Java!!
(each running alone on same server)

Details:
* Node.js serves 3x more GET requests than Java can do
* Java has faster response time
* Node.js and Java have similar requests/sec doing POST requests
* both Node.js and Java serves GET is 2x faster than POST: 
  No surprise, GET-example it is a simpler request, transfers less data and has easier marshaling

Java and Node.js flood all CPU Cores with high load (against the rumors: N
ode.js is single threaded and can't use multiprocessing, details see also here: https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)

Good news (both): 0% Errors

# My Load Test Set Up:

REMARK: In JMeter you can to change the Port (8080 vs 8090, in both(!!) WebTests) to toggle between the two services.

* Servicess: 4 Core Server, Docker 
* JMeter: separate 4 Core Server, running lot minutes (to eliminate ramp up etc.), even during test lot free RAM
  * JMeter was configured to run 100 Threads GET and POST mixed

Both running Ubuntu 18 LTS

To simulate bad networks, I recommend home WIFI, pls aks your kids to stream some videos :-D