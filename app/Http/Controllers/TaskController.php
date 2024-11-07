<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

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
        $task->update($request->all());
        return response()->json($task, 200);
    }

    // Delete a task
    public function destroy($id)
    {
        Task::destroy($id);
        return response()->json(null, 204);
    }
}
