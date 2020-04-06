class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Incorrect username or password'], status: 401
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ['Oops! Something went wrong.'], status: 404
        end
    end
end
