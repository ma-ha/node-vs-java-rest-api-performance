# Build and Run 

Requires https://github.com/spring-guides/gs-rest-service/blob/master/complete/gradlew 
(or one of the other alternatives in this folder)

    gradlew build
    docker build -t  mh/perf-tst-java . 
    docker run -d --name perf-tst-java -p 8080:8080 mh/perf-tst-java

BTW: I was not able to build it using OpenJDK :-(