FROM openjdk:8
ADD target/spring-mysql.jar spring-mysql.jar
EXPOSE 8086
ENTRYPOINT ["java", "-jar", "spring-mysql.jar"]