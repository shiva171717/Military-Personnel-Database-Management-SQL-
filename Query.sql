-- Retrieve all soldiers who have earned a medal:
SELECT s.sname, m.medalname
FROM
    soldier s
    JOIN honors h ON s.soldierid = h.soldierid
    JOIN medals m ON h.medalid = m.medalid;

-- Find all operations that the 'Kumaon Regiment' has been involved in:
SELECT o.oname, o.startdate, o.enddate, o.outcome
FROM
    regiment r
    JOIN soldier s ON r.regimentcode = s.regimentcode
    JOIN operation o ON s.operationcode = o.operationcode
WHERE
    r.rname = 'Kumaon Regiment';

-- List all soldiers who are currently posted in Lucknow:
SELECT s.sname, s.srank, p.pfrom, p.ptill
FROM soldier s
    JOIN posting p ON s.soldierid = p.soldierid
WHERE
    p.district = 'Lucknow'
    AND p.ptill < CURRENT_DATE;


--  Get the total number of weapons each regiment has in their inventory:
SELECT r.rname, SUM(wi.quantity) AS total_weapons
FROM
    regiment r
    JOIN weaponsinventory wi ON r.regimentcode = wi.regimentcode
GROUP BY
    r.rname;

-- List the soldiers who are serving in 'Operation Sahyog' and their ranks:
SELECT s.sname, s.srank
FROM soldier s
    JOIN operation o ON s.operationcode = o.operationcode
WHERE
    o.oname = 'Operation Sahyog';

-- Get the total salary expenditure for all soldiers in each regiment:
SELECT r.rname, SUM(sa.salary) AS total_salary
FROM
    soldier s
    JOIN regiment r ON s.regimentcode = r.regimentcode
    JOIN salary sa ON s.srank = sa.srank
GROUP BY
    r.rname;

-- Find all soldiers from 'Meerut' and their regiment names:
SELECT s.sname, r.rname
FROM soldier s
    JOIN regiment r ON s.regimentcode = r.regimentcode
WHERE
    s.district = 'Meerut';

-- Retrieve all soldiers who have received more than 1 medal:
SELECT s.sname, COUNT(h.medalid) AS medals_count
FROM soldier s
    JOIN honors h ON s.soldierid = h.soldierid
GROUP BY
    s.sname
HAVING
    COUNT(h.medalid) > 1;

-- List regiments with their current strength and their maximum capacity:
SELECT r.rname, r.currstrength, r.maxstrength
FROM regiment r
ORDER BY r.rname;

-- Find all soldiers with a height greater than 175 cm and their ranks:
SELECT s.sname, s.height, s.srank
FROM soldier s
WHERE
    s.height > 175;