<?php

namespace Database\Seeders;

use App\Models\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class TaskSeeder extends Seeder
{
    public function run()
    {
        // Read data from a JSON file (ensure the file is in the 'database/seeders' folder)
        $json = File::get(database_path('seeders/tasks.json'));
        $data = json_decode($json, true);

        // Insert data into MongoDB
        foreach ($data as $taskData) {
            Task::create($taskData); // Assuming 'Task' is the model
        }
    }
}
