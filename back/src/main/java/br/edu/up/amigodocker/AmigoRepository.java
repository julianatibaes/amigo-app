package br.edu.up.amigodocker;

import org.springframework.data.repository.CrudRepository;

//This will be AUTO IMPLEMENTED by Spring into a Bean called amigoRepository
//CRUD refers Create, Read, Update, Delete

public interface AmigoRepository extends CrudRepository<Amigo, Long> {

}
