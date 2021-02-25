@extends('admin.layout.master')
@section('page-title','Add User')
@section('content')
    <!-- Main content -->
    <section class="content">
        <form method="post" enctype="multipart/form-data">
            @csrf
            <div class="row">
                <div class="col-8 ">
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Information</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse"
                                        data-toggle="tooltip" title="Collapse">
                                    <i class="fas fa-minus"></i></button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="inputName">User Name</label>
                                <input type="text" name="name" id="inputName" placeholder="Input user name"
                                       class="form-control @error('username') is-invalid @enderror">
                                @error('username')
                                <div style="color: red">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="inputEmail">Email</label>
                                <input type="text" name="email" id="inputEmail" placeholder="Input email"
                                       class="form-control @error('email') is-invalid @enderror">
                                @error('email')
                                <div style="color: red">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="inputRole">Role</label>
                                <select name="role_id" class="form-control custom-select">
                                    @foreach($roles as $key => $role)
                                        <option
                                            value="{{$role->id}}">{{$role->name}}</option>
                                    @endforeach
                                </select>
                                @error('role_id')
                                <div style="color: red">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="inputPassword">Password</label>
                                <input type="password" name="password" id="inputPassword" placeholder="Input password"
                                       class="form-control @error('password') is-invalid @enderror">
                                @error('password')
                                <div style="color: red">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <label for="inputImage">Image</label>
                                <input type="file" accept=".png, .jpg, .jpeg" name="image" id="inputImage"
                                       class="form-control @error('image') is-invalid @enderror">
                                @error('image')
                                <div style="color: red">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Add" class="btn btn-success">
                                <a href="{{route('users.index')}}" class="btn btn-secondary">Back</a>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </form>
    </section>
@endsection
