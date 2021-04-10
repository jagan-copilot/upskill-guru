CREATE DEFINER=`root`@`localhost` PROCEDURE `HotSkillsByLocation`(
	IN `top` int,
    IN `jobTitleKeyword` VARCHAR(255)
)
BEGIN
SELECT * FROM (SELECT j.JobTitle, s.SkillName AS skill_name, CONCAT_WS(',', l.City, l.State) AS joblocation_address,l.Latitude AS lat,l.Longitude AS longi, COUNT(l.city) AS frequency
FROM jobs j
INNER JOIN jobskills js ON js.JobId= j.JobId
INNER JOIN skills s ON js.SkillId = s.SkillId
INNER JOIN joblocation jl ON js.JobId = jl.JobId
INNER JOIN locations l ON jl.LocationId = l.LocationId
GROUP BY s.SkillName
ORDER BY  COUNT(l.city) DESC)tmp
WHERE lower(tmp.JobTitle) LIKE CONCAT('%', lower(jobTitleKeyword), '%')
LIMIT top;

END