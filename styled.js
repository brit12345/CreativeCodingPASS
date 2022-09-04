db.titles.aggregate(
  [ 
    { 
      $match: 
        { 
          $and: 
          [ 
            {"genres": {$regex: "Fantasy"}}, 
            {"genres": {$regex: "Adventure"}}, 
            {"startYear": 2021} 
          ] 
        } 
    }, 
    { 
      $lookup: 
      { 
        from: "ratings", 
        localField: "tconst", 
        foreignField: "tconst", 
        as: "rating" 
      } 
    }, 
    { $unwind: "$rating" }, 
    { $project: {"primaryTitle": 1, "rating.numVotes": 1}}, 
    { $sort: {"rating.numVotes": -1}}, 
    { $limit: 5} 
  ]
)


