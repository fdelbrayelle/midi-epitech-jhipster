package tech.ippon.repository;
import tech.ippon.domain.Organism;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Organism entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrganismRepository extends JpaRepository<Organism, Long> {

}
