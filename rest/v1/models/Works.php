<?php

Class Works {

    public $works_aid;
    public $works_title;
    public $works_image;
    public $works_description;
    public $works_is_active;
    public $works_date_published;
    public $works_created;
    public $works_datetime;

    public $works_search;
    
    public $connection;
    public $lastInsertedId;
    public $tblWorks;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWorks = "tbl_works";
    }

    public function create() {
        try {
            $sql = "insert into {$this->tblWorks} ";
            $sql .= "( works_title, ";
            $sql .= "works_image, ";
            $sql .= "works_is_active, ";
            $sql .= "works_date_published, ";
            $sql .= "works_description, ";
            $sql .= "works_created, ";
            $sql .= "works_datetime ) values (";
            $sql .= ":works_title, ";
            $sql .= ":works_image, ";
            $sql .= ":works_is_active, ";
            $sql .= ":works_date_published, ";
            $sql .= ":works_description, ";
            $sql .= ":works_created, ";
            $sql .= ":works_datetime) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_title" => $this->works_title,
                "works_image" => $this->works_image,
                "works_is_active" => $this->works_is_active,
                "works_date_published" => $this->works_date_published,
                "works_description" => $this->works_description,
                "works_created" => $this->works_created,
                "works_datetime" => $this->works_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOExeception $ex) {
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblWorks} ";
            // $sql .= "order by portfolio_is_active desc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblWorks} ";
            $sql .= "where works_aid = :works_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_aid" => $this->works_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblWorks} set ";
            $sql .= "works_title = :works_title, ";
            $sql .= "works_image = :works_image, ";
            $sql .= "works_date_published = :works_date_published, ";
            $sql .= "where works_aid  = :works_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_title" => $this->works_title,
                "works_image" => $this->works_image,
                "works_date_published" => $this->works_date_published,
                "works_aid" => $this->works_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblWorks} set ";
            $sql .= "works_is_active = :works_is_active, ";
            $sql .= "works_datetime = :works_datetime ";
            $sql .= "where works_aid  = :works_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_is_active" => $this->works_is_active,
                "works_datetime" => $this->works_datetime,
                "works_aid" => $this->works_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblWorks} ";
            $sql .= "where works_title like :works_title ";
            $sql .= "order by works_is_active desc, ";
            $sql .= "works_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "works_title" => "%{$this->works_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

}