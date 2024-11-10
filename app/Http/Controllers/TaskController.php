<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{
    // Get all tasks
    public function index()
    {
        return Task::all();
    }

    // Create a new task
    public function store(Request $request)
    {
        Log::info('Request Data:', $request->all());
        $task = Task::create($request->all());
        return response()->json($task, 201);
    }

    // Show a specific task
    public function show($id)
    {
        return Task::find($id);
    }

    // Update a task
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($id);
        Log::info('Request Data:', $request->all());
        $task->update($request->all());
        return response()->json($task, 200);
    }

    // Delete a task
    public function destroy($id)
    {
        Task::destroy($id);
        return response()->json(null, 204);
    }

    // Mark task as finished
    public function markAsComplete(Task $task)
    {
        $task->update(['completed' => true]);
        return response()->json($task, 200);
    }
}
