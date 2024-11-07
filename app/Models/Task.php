<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model as MongoDBModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends MongoDBModel
{
    use HasFactory;

    // Add the 'title' and 'description' to the fillable property
    protected $fillable = ['title', 'description'];
}
