package tech.ippon.repository;
import tech.ippon.domain.StudyVersion;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the StudyVersion entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StudyVersionRepository extends JpaRepository<StudyVersion, Long> {

}
