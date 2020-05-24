FROM openjdk:8-jre-alpine
COPY build/libs/rest-service-0.1.0.jar /app/rest-service-0.1.0.jar
ENTRYPOINT ["java"]
CMD ["-jar", "/app/rest-service-0.1.0.jar"]
EXPOSE 8080