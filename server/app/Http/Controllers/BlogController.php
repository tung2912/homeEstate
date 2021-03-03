<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogRequest;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
//    start for dashboard
    public function details($id)
{
    $blog = Blog::findOrFail($id);
    return view('admin.blogs.details', compact('blog'));
}

    public function index()
    {
        $blogs = Blog::all();

        return view('admin.blogs.list', compact('blogs'));
    }

    public function create()
    {
        return view('admin.blogs.add');
    }

    public function store(BlogRequest $request)
    {
        $blog = new Blog();
        $blog->title = $request->title;
        $blog->content = $request->contents;
        $this->uploadImage1($blog, $request);
        $this->uploadImage2($blog, $request);
        $blog->save();

        return redirect()->route('blogs.index')->with('success','Add Successfully');

    }

    public function edit($id) {
        $blog = Blog::findOrFail($id);
        return view('admin.blogs.edit',compact('blog'));
    }

    public function update(BlogRequest $request, $id) {
        $blog = Blog::findOrFail($id);
        $blog->title = $request->title;
        $blog->content = $request->contents;
        $this->uploadImage1($blog, $request);
        $this->uploadImage2($blog, $request);
        $blog->save();

        return redirect()->route('blogs.index')->with('Update','Add Successfully');;
    }

    public function delete($id) {
        $blog = Blog::findOrFail($id);
        $blog->delete();

        return redirect()->route('blogs.index')->with('warning','Delete Successfully');;
    }

    function uploadImage1($obj, $request)
    {
        if ($request->hasfile('image1')) {
            $pathImage = Storage::disk('s3')->put('images', $request->image1,'public');
            $obj->image1 = $pathImage;
        }
    }

    function uploadImage2($obj, $request)
    {
        if ($request->hasfile('image2')) {
            $pathImage = Storage::disk('s3')->put('images', $request->image2,'public');
            $obj->image2 = $pathImage;
        }
    }
    //    end for dashboard

    //    start for client

    public function apiAllBlogs(){
        $blogs = Blog::all();

        return response()->json($blogs, 200);
    }

    public function apiNewBlogs(){
        $blogs = Blog::orderBy('created_at', 'ASC')->limit(4)->get();

        return response()->json($blogs, 200);
    }

    public function apiOldBlogs(){
        $blogs = Blog::orderBy('created_at', 'DESC')->limit(4)->get();

        return response()->json($blogs, 200);
    }

    public function apiBlogDetail($id) {
        $blog = Blog::find($id);

        if(is_null($blog)) {
            return response()->json(['message' => 'Blog not found'], 404);
        }

        return response()->json($blog, 200);
    }

    //    end for client


}
