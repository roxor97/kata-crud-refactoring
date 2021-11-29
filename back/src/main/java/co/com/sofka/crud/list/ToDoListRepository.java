package co.com.sofka.crud.list;

import co.com.sofka.crud.ToDo.ToDo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToDoListRepository extends CrudRepository<ToDoList, Long> {
    Iterable<ToDo> findAllToDosById(Long id);
}
